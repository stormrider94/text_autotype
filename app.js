// const text_to_type = "you don't need to memorize the code, you can just reference the docs which will be there forever"
const text_to_type = `when you start learning how to code, there's this trap that most beginners fall into, they write their code on their
machines and then just hide it away from the world. They don't earn any money from the code they write, they don't build any community,
they end up being broke. They don't get a mentor who can look at their code and review it to see if there's something they're doing 
wrong or if there's something their doing right. When you start writing code, it's a good idea not to just leave it on your laptop's harddisk 
to rot. Put your code out there for people to read and criticize. You need feedback to improve. 
It's not even only about feedback, if you want to build a following on social media, or get a chance to earn money digitally, you have
to share your progress with the community. When you build projects, kindly share them with the community. Give back to the community that 
fed you. Inspire someone else even if it's just one person. Share the projects you build. Share the source code. Put it out there. 
After all you have nothing to lose if you just share your code and the project, you can later monetize that project.`
const paragraph_to_autotype = document.querySelector('.autotype')

function autoType(index=0){
    const milliseconds = 50
    if(index === text_to_type.length){
        erase_from_behind(milliseconds,index-1)
        return
    }
    paragraph_to_autotype.innerHTML += `<span>${text_to_type[index]}<span>`
    setTimeout(()=>{autoType(index + 1)},milliseconds)
}

function erase_from_behind(ms,index){
    if(index == -1){
        return
    }
    const current_children = [...paragraph_to_autotype.children]
    paragraph_to_autotype.removeChild(current_children[index])
    setTimeout(()=>{
        erase_from_behind(ms,index-1)
    },ms)

}
autoType()