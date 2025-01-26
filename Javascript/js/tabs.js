document.addEventListener("DOMContentLoaded", function() {
    let listTab = document.getElementsByClassName("tab");

    for (let i = 0; i < listTab.length; i++) {
        const tab = listTab[i];
        tab.addEventListener("click", function() {

            for (let j = 0; j < listTab.length; j++) {
                listTab[j].classList.remove("tab-active");
            }

            this.classList.add("tab-active");

            let classTab = this.classList;

            let listContent = document.getElementsByClassName("content");
            for (let k = 0; k < listContent.length; k++) {
                listContent[k].classList.remove("active");
            }

            if (classTab.contains("tab-content1")) {
                document.querySelector(".content1").classList.add("active");
            } else if (classTab.contains("tab-content2")) {
                document.querySelector(".content2").classList.add("active");
            } else {
                document.querySelector(".content3").classList.add("active");
            }
        });
    }
});
