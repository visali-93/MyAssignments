function launchBrowser (browserName) {          
    if (browserName === 'chrome') {             
        console.log(`Browser is chrome`);      
    }   else {                                  
        console.log(`Browser is not chrome`);
    }
}
 
function runTests (testType) {                  
    switch (testType) {
        case 'smoke':
            console.log(`it is smoke`);
            break;
        case 'sanity':
            console.log(`it is sanity`);
            break;  
        case 'regression':
            console.log(`it is regression`);
            break;  
        default: console.log (`its not test`)
            break;
    }
}
 
launchBrowser(`chrome`)                         
runTests (`regression`)