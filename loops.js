function vowelsAndConsonants(s) {
    var consonants="";
    for(var i=0;i<s.length;i++){
        switch(s[i])
        {
            case 'a':
            case'e':
            case'i':
            case'o':
            case'u':
            console.log(s[i]);
            break;
        default:
        consonants+= s[i] + "\n";
        }
    }
        console.log(consonants.trim());
}
