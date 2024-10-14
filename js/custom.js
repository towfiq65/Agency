const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

// মেনু টগল করার জন্য ইভেন্ট লিসেনার
menuBtn.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    e.stopPropagation();  // বাটন ক্লিক করলে বডি ইভেন্ট বন্ধ রাখতে
});

// বডিতে ক্লিক করলে মেনু বন্ধ করার জন্য ইভেন্ট লিসেনার
document.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});

// বডিতে ক্লিক করার সময় মেনু বন্ধ না হয়, তাই মেনুর উপর ক্লিক করলে ইভেন্ট বন্ধ থাকবে
nav.addEventListener('click', (e) => {
    e.stopPropagation();
});
