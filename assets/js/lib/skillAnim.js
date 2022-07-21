const skillAnim = () => {
    const skill = document.getElementsByClassName("skill");
    console.dir(skill[0]);
    const progress = [90, 85, 75];
    window.addEventListener("scroll", () => {
        for (let index = 0; index < skill.length; index++) {
            if (skill[index].scrollIntoView) {
                skill[index].style.width = progress[index] + "%";
            }
        }
    })
}

export {skillAnim}