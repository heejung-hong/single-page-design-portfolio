# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![desktop](https://github.com/user-attachments/assets/31988e3f-26cb-4b2d-b3df-46e346b03207)
![tablet](https://github.com/user-attachments/assets/387c225a-fbfd-496f-bf8c-daf9b6858ddc) <br>
![mobile-1](https://github.com/user-attachments/assets/001b8a5b-d49d-41fe-94ea-97c84c1a4e4d)
![mobile-2](https://github.com/user-attachments/assets/7f2c6bbc-48dc-4c6a-9491-2ce53eae255e)

### Links

- [Solution URL](https://github.com/heejung-hong/single-page-design-portfolio)
- [Live Site URL](https://heejung-hong.github.io/single-page-design-portfolio/)

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind Play CDN](https://tailwindcss.com/docs/installation/play-cdn)

### What I learned

I used overflow-hidden tailwind css to control the images that needed to be partially hidden for the container. <br>
I also created event listener functions so that the slideshow navigator can be used with either a mouse/trackpad or keyboard. This allows for better accessibility.

To see how you can add code snippets, see below:

```html
<div
  class="md:overflow-hidden md:flex items-center xl:justify-between md:w-[768px] xl:w-[1111px] md:mt-[50px] xl:mt-[100px] xl:m-auto"
></div>
```

```js
document.getElementById("left").addEventListener("click", function (n) {
  plusSlides(-1);
});
document.getElementById("right").addEventListener("click", function (n) {
  plusSlides(1);
});
```

### Continued development

For future projects, I would like to work on projects that entail more JavaScript requirements.

### Useful resources

- [How to Create a Slideshow](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow) - This helped me with creating the slideshow and helped to change the images to the left and to the right of the main image.

## Author

- Website - [Heejung Hong](https://heejunghong.com/)
- Frontend Mentor - [@heejung-hong](https://www.frontendmentor.io/profile/heejung-hong)
- LinkedIn - [heejung-hong](https://www.linkedin.com/in/heejung-hong/)
