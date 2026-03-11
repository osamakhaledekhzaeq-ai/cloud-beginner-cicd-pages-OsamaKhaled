// الحصول على الزر
const btn = document.getElementById("btn");

// عند الضغط على الزر
btn.addEventListener("click", () => {
    // توليد لون عشوائي بصيغة HEX
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // تغيير لون كل <h2>
    const headings = document.querySelectorAll("h2");
    headings.forEach(h2 => {
        h2.style.color = randomColor;
    });

    // تغيير لون كل <p>
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(p => {
        p.style.color = randomColor;
    });
});