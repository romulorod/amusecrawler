const cherio = require('cherio');
const request = require('request');
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();

let imageUrl = '';
const label = process.argv[2]?.split('=')[1]?.includes(',') ? process.argv[2].split('=')[1].split(',') : process.argv[2]?.split('=')[1];
const email = process.argv[3]?.split('=')[1];
if(!label) {
  console.log('You forgot to pass label.. i.e. node index.js --label="cat, dog, bird"');
  process.exit();
}
if(!email) {
  console.log('You forgot to pass your friend\'s email.. i.e. node index.js --email="myfriendemail@email.com"');
  process.exit();
}

const formatLabel = (label) => {
  let isolatedLabels = '';
  for(let labels of label) {
    isolatedLabels += labels + '+'.trim();
  }
  isolatedLabels = isolatedLabels.replace(/\s/g, '');
  isolatedLabels = isolatedLabels.lastIndexOf('+') ? isolatedLabels.slice(0, isolatedLabels.lastIndexOf('+')) : (
    'I am sorry, something went wrong. Check your tipying label.'
  );
  return isolatedLabels;
};

const checkLabel = (label) => {
  return Array.isArray(label) ? formatLabel(label) : label;
};
const baseUrl = `https://www.google.com/search?q=${checkLabel(label)}&source=lnms&tbm=isch&sa=X&ved=2ahUKEwieu6iylIf3AhXXkZUCHWBdC2MQ_AUoAXoECAEQAw&biw=2488&bih=948&dpr=1'`;

request(baseUrl, (err, response, html) => {
  if(!err && response.statusCode == 200) {
    console.log('Google Images loaded successfully!');
    const $ = cherio.load(html);
    $('img').each((index, image) => {
      setTimeout(() => {
        let img = $(image).attr('src');
        if(img.includes('https')) {
          imageUrl = img;
          sendIt(email);
        }
      }, 1000 * index);
    });
  } else {
    console.log(err);
  }
});

function sendIt(receiver) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
      port: 587,
      secure: true,
    }
  });
  const mailOptions = {
    from: process.env.EMAIL,
    to: receiver,
    subject: process.env.SUBJECT,
    html: `<img src=${imageUrl} width='500px'/>`
  };
  transporter.sendMail(mailOptions, async (erro, info) => {
    if(erro) {
      console.log('Error on sending email');
      return console.log(erro);
    } else {
      console.log('Sending Email...');
    }
    return await Promise.resolve({ success: true });
  });
}
