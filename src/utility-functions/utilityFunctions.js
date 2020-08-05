export const limitSentence = (sentence) => {
    const words = sentence.split(" ");

    if(words.length > 16 )
        return `${words.slice(0, 15).join(" ")}...`;
    return sentence;
}

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}