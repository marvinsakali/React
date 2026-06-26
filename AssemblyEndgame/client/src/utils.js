import { words } from "./words";


export default function getRandomWord(){
    const randomIndex = Math.floor(Math.random() * words.length)
    const randomWord = words[randomIndex]

    return randomWord

}