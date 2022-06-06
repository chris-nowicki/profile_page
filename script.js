// this function updates the profile user name
function nameChange() {
    document.querySelector("div.card-body > h1").innerHTML = "Chris Wix";
}

// this function removes a user request when accept/deny button is selected
// this function updates connection requests and your connections count
function connectionsUpdate(profileID, action) {
    //removes user request
    x = document.querySelector(profileID);
    x.parentNode.removeChild(x);
    
    //update the connection request count
    document.querySelector("div.infobox-header-icon-s").innerHTML--;
    
    // update the connections count
    if(action === "add") {
        document.querySelector("div.infobox-header-icon-m").innerHTML++;
    }
}