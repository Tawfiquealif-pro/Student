
let rollNumber;
let Code;
let Code2;
let Code3;
let Code4;
let Code5;
let FilteredSID;
let SID;

   
const SearchName=document.getElementById('nickName')
let forSearch ;
let lowerCaseLetter;

function findIndexByFullName(array, fullName) {
   for (let i = 0; i < array.length; i++) {
       if (array[i].Name === fullName || array[i].LastName === fullName) {
           return i; // Return the index if either Name or LastName matches
        }
    }
   return -1; // Return -1 if the full name is not found
}


function handleKeyPress(event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13) {
        // Call your function here
        add();
    }
}

// Add event listener to the document for keydown event
document.addEventListener("keydown", handleKeyPress);


function showResult(){
    
    document.getElementById('resultSheet').style.display = 'block'
    let ResultCode = information[rollNumber].Result
    let BiologyNumber = MIDTERM_ONE[ResultCode].Biology;
    let ChemisteryNumber = MIDTERM_ONE[ResultCode].Chemistery;
    let EnglishNumber =  MIDTERM_ONE[ResultCode].English
    let BanglaNumber = MIDTERM_ONE[ResultCode].Bangla
    let PhysicsNumber = MIDTERM_ONE[ResultCode].Physics
    let MathNumber = MIDTERM_ONE[ResultCode].Math
    let BgsNumber = MIDTERM_ONE[ResultCode].Bgs
    
    document.getElementById('C').innerHTML = 'HIDE RESULT'
    document.getElementById('biologyNumber').innerHTML = BiologyNumber
    document.getElementById('chemisteryNumber').innerHTML = ChemisteryNumber
    document.getElementById('mathNumber').innerHTML = MathNumber
    document.getElementById('physicsNumber').innerHTML = PhysicsNumber
    document.getElementById('bgsNumber').innerHTML = BgsNumber
    document.getElementById('banglaNumber').innerHTML = BanglaNumber
    document.getElementById('englishNumber').innerHTML = EnglishNumber

    if(BanglaNumber<160){
        document.getElementById('banglaGrade').innerHTML = 'A'
    }else{
        document.getElementById('banglaGrade').innerHTML = 'A+'
    }
    if(PhysicsNumber<80){
        document.getElementById('physicsGrade').innerHTML = 'A'
    }else{
        document.getElementById('physicsGrade').innerHTML = 'A+'
    }
    if(ChemisteryNumber<80){
        document.getElementById('chemisteryGrade').innerHTML = 'A'
    }else{
        document.getElementById('chemisteryGrade').innerHTML = 'A+'
    }
    if(BgsNumber<80){
        document.getElementById('bgsGrade').innerHTML = 'A'
    }else{
        document.getElementById('bgsGrade').innerHTML = 'A+'
    }
    if(EnglishNumber<160){
        document.getElementById('englishGrade').innerHTML = 'A'
    }else{
        document.getElementById('englishGrade').innerHTML = 'A+'
    }
    if(MathNumber<80){
        document.getElementById('mathGrade').innerHTML = 'A'
    }else{
        document.getElementById('mathGrade').innerHTML = 'A+'
    }
    if(BiologyNumber<80){
        document.getElementById('biologyGrade').innerHTML = 'A'
    }else{
        document.getElementById('biologyGrade').innerHTML = 'A+'
    }
}

function add(){
    
    forSearch = SearchName.value
    
    lowerCaseLetter=forSearch.toLowerCase()
    
     
     
     let fullNameToFind = lowerCaseLetter; // Input full name to search
     let index = findIndexByFullName(information, fullNameToFind);
     console.log(index); // Output: 0 (Index of the object with the given full
        if(lowerCaseLetter.length == 7){
            SID=forSearch
            FilteredSID=parseInt(SID.slice(3,6))
        }else{
           FilteredSID=index 
        }
        
      rollNumber =FilteredSID
        if(rollNumber>=0){
            console.log('it is a Number!')
        }else{
            rollNumber = index
            console.log('it is a string thats why the Index would do the job')
        }

        if(rollNumber == -1){
            BassicStyle()
            document.getElementById('ERROR').style.display= 'block'
            document.getElementById('ERROR').innerHTML= 'Sorry but it seems like its an invalid ID'
        }else{
            document.getElementById('ERROR').style.display= 'none'
        }
            
    
   
     Code=information[rollNumber].Strike1;
     Code2=information[rollNumber].Strike2;
     Code3=information[rollNumber].Strike3;
     Code4=information[rollNumber].Strike4;
     Code5=information[rollNumber].Strike5;


 
    document.getElementById('A').style.display= 'inline'
    document.getElementById('B').style.display= 'inline'
    document.getElementById('C').style.display= 'inline'
     document.getElementById('name').innerHTML= information[rollNumber].Name
document.getElementById('reg').innerHTML= information[rollNumber].Registration
document.getElementById('grade').innerHTML= information[rollNumber].Grade
document.getElementById('position').innerHTML= information[rollNumber].Position
document.getElementById('attendence').innerHTML= information[rollNumber].Attendence
document.getElementById('contactNumber').innerHTML = information[rollNumber].Number;
document.getElementById('password').innerHTML= information[rollNumber].Password
document.getElementById('presentToday').innerHTML= information[rollNumber].Present
document.getElementById('strikeCount').innerHTML= information[rollNumber].StrikeCount


document.getElementById('catagory').innerHTML= StrikeList[Code].Catagory
document.getElementById('reason').innerHTML= StrikeList[Code].Reason
document.getElementById('rulecode').innerHTML= StrikeList[Code].StrikeWord
document.getElementById('strikecode').innerHTML= StrikeList[Code].StrikeCode
document.getElementById('recomendation').innerHTML= StrikeList[Code].Recomendation
document.getElementById('date').innerHTML= information[rollNumber].Strike1Date

const Object = information[rollNumber];
const hasStrike2Key = 'Strike2'  in Object;
const hasStrike3Key = 'Strike3'  in Object;
const hasStrike4Key = 'Strike4'  in Object;
const hasStrike5Key = 'Strike5'  in Object;



    if (hasStrike2Key) {
        document.getElementById('catagory-2').innerHTML= StrikeList[Code2].Catagory
        document.getElementById('reason-2').innerHTML= StrikeList[Code2].Reason
        document.getElementById('rulecode-2').innerHTML= StrikeList[Code2].StrikeWord
        document.getElementById('strikecode-2').innerHTML= StrikeList[Code2].StrikeCode
        document.getElementById('recomendation-2').innerHTML= StrikeList[Code2].Recomendation
        document.getElementById('date-2').innerHTML= information[rollNumber].Strike2Date
    } else {
        BassicStyleForStrike()
    }
    
    if (hasStrike3Key) {
        document.getElementById('catagory-3').innerHTML= StrikeList[Code3].Catagory
        document.getElementById('reason-3').innerHTML= StrikeList[Code3].Reason
        document.getElementById('rulecode-3').innerHTML= StrikeList[Code3].StrikeWord
        document.getElementById('strikecode-3').innerHTML= StrikeList[Code3].StrikeCode
        document.getElementById('recomendation-3').innerHTML= StrikeList[Code3].Recomendation
        document.getElementById('date-3').innerHTML= information[rollNumber].Strike3Date
    } else {
        BassicStyleForStrike()
    }
    
    if (hasStrike4Key) {
      
        document.getElementById('catagory-4').innerHTML= StrikeList[Code4].Catagory
        document.getElementById('reason-4').innerHTML= StrikeList[Code4].Reason
        document.getElementById('rulecode-4').innerHTML= StrikeList[Code4].StrikeWord
        document.getElementById('strikecode-4').innerHTML= StrikeList[Code4].StrikeCode
        document.getElementById('recomendation-4').innerHTML= StrikeList[Code4].Recomendation
        document.getElementById('date-4').innerHTML= information[rollNumber].Strike4Date
        }else {
            BassicStyleForStrike()
        }
        
    
    if (hasStrike5Key) {
      
        document.getElementById('catagory-5').innerHTML= StrikeList[Code5].Catagory
        document.getElementById('reason-5').innerHTML= StrikeList[Code5].Reason
        document.getElementById('rulecode-5').innerHTML= StrikeList[Code5].StrikeWord
        document.getElementById('strikecode-5').innerHTML= StrikeList[Code5].StrikeCode
        document.getElementById('recomendation-5').innerHTML= StrikeList[Code5].Recomendation
        document.getElementById('date-5').innerHTML= information[rollNumber].Strike5Date
        } else {
            BassicStyleForStrike()
        }

        

}  

function BassicStyle(){
    document.getElementById('resultSheet').style.display = 'none'
    document.getElementById('C').style.display = 'none'
    document.getElementById('A').style.display = 'none'
    document.getElementById('B').style.display = 'none'
    document.getElementById('name').innerHTML= ''
    document.getElementById('reg').innerHTML= ''
    document.getElementById('grade').innerHTML= ''
    document.getElementById('position').innerHTML= ''
    document.getElementById('attendence').innerHTML= ''
    document.getElementById('contactNumber').innerHTML = '';
    document.getElementById('password').innerHTML= ''
    document.getElementById('presentToday').innerHTML= ''
    document.getElementById('strikeCount').innerHTML= ''

    document.getElementById('catagory').innerHTML=''
document.getElementById('reason').innerHTML=''
document.getElementById('rulecode').innerHTML= ''
document.getElementById('strikecode').innerHTML= ''
document.getElementById('recomendation').innerHTML= ''
document.getElementById('date').innerHTML=''

    console.log("The first object in the array does not have the key 'Strike2'.");
    document.getElementById('catagory-2').innerHTML= ''
    document.getElementById('reason-2').innerHTML= ''
    document.getElementById('rulecode-2').innerHTML= ''
    document.getElementById('strikecode-2').innerHTML= ''
    document.getElementById('recomendation-2').innerHTML=''
    document.getElementById('date-2').innerHTML= ''

    console.log("The first object in the array does not have the key 'Strike3'.");
    document.getElementById('catagory-3').innerHTML= ''
    document.getElementById('reason-3').innerHTML= ''
    document.getElementById('rulecode-3').innerHTML= ''
    document.getElementById('strikecode-3').innerHTML= ''
    document.getElementById('recomendation-3').innerHTML=''
    document.getElementById('date-3').innerHTML= ''

    console.log("The first object in the array does not have the key 'Strike4'.");
    document.getElementById('catagory-4').innerHTML= ''
    document.getElementById('reason-4').innerHTML= ''
    document.getElementById('rulecode-4').innerHTML= ''
    document.getElementById('strikecode-4').innerHTML= ''
    document.getElementById('recomendation-4').innerHTML=''
    document.getElementById('date-4').innerHTML= ''

    console.log("The first object in the array does not have the key 'Strike5'.");
            document.getElementById('catagory-5').innerHTML= ''
            document.getElementById('reason-5').innerHTML= ''
            document.getElementById('rulecode-5').innerHTML= ''
            document.getElementById('strikecode-5').innerHTML= ''
            document.getElementById('recomendation-5').innerHTML=''
            document.getElementById('date-5').innerHTML= ''
}

function BassicStyleForStrike(){
    console.log("The first object in the array does not have the key 'Strike2'.");
    document.getElementById('catagory-2').innerHTML= ''
    document.getElementById('reason-2').innerHTML= ''
    document.getElementById('rulecode-2').innerHTML= ''
    document.getElementById('strikecode-2').innerHTML= ''
    document.getElementById('recomendation-2').innerHTML=''
    document.getElementById('date-2').innerHTML= ''

    console.log("The first object in the array does not have the key 'Strike3'.");
    document.getElementById('catagory-3').innerHTML= ''
    document.getElementById('reason-3').innerHTML= ''
    document.getElementById('rulecode-3').innerHTML= ''
    document.getElementById('strikecode-3').innerHTML= ''
    document.getElementById('recomendation-3').innerHTML=''
    document.getElementById('date-3').innerHTML= ''

    console.log("The first object in the array does not have the key 'Strike4'.");
    document.getElementById('catagory-4').innerHTML= ''
    document.getElementById('reason-4').innerHTML= ''
    document.getElementById('rulecode-4').innerHTML= ''
    document.getElementById('strikecode-4').innerHTML= ''
    document.getElementById('recomendation-4').innerHTML=''
    document.getElementById('date-4').innerHTML= ''

    console.log("The first object in the array does not have the key 'Strike5'.");
            document.getElementById('catagory-5').innerHTML= ''
            document.getElementById('reason-5').innerHTML= ''
            document.getElementById('rulecode-5').innerHTML= ''
            document.getElementById('strikecode-5').innerHTML= ''
            document.getElementById('recomendation-5').innerHTML=''
            document.getElementById('date-5').innerHTML= ''
}


function copyNumber(){
    
    const text = information[rollNumber].Number
    navigator.clipboard.writeText(text)
}

function copyPassword(){
    const text = information[rollNumber].Password
    navigator.clipboard.writeText(text)
}




























