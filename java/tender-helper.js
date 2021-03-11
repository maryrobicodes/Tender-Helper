function letters()
{
document.getElementById("the-letters").style.display = "block";
document.getElementById("letter-info").style.display = "none";
document.getElementById("showletter").style.display = "none";

idate = document.getElementById("idate").value;
coname = document.getElementById("coname").value;
coaddress = document.getElementById("coaddress").value;
cocounty = document.getElementById("cocounty").value;
cocode = document.getElementById("cocode").value;
codirector = document.getElementById("codirector").value;

orperson = document.getElementById("orperson").value;
orname = document.getElementById("orname").value;
oraddress = document.getElementById("oraddress").value;
ortno = document.getElementById("ortno").value;
ortname = document.getElementById("ortname").value;

amount = currency(document.getElementById("amount").value, { separator: ',' }).format();
amountwords = document.getElementById("amountwords").value;

}



function changeinfo()
{
document.getElementById("the-letters").style.display = "none";
document.getElementById("letter-info").style.display = "block";

}

function printme(){
var myVar = setInterval(myTimer, 3000);
document.getElementsByClassName("left")[0].style.display = "none";
document.getElementsByClassName("right")[0].style.width = "95%";
document.getElementById("showletter").style.border = "0";
document.getElementById("showletter").style.paddingLeft = "30px";
document.getElementById("print-bu").style.display = "none";
document.getElementById("date").style.marginTop = "150px";
window.print();

function myTimer() {
document.getElementsByClassName("left")[0].style.display = "block";
document.getElementById("print-bu").style.display = "block";
document.getElementById("date").style.marginTop = "80px";
document.getElementsByClassName("right")[0].style.width = "75%";
document.getElementById("showletter").style.border = "thin solid #666666";
document.getElementById("showletter").style.paddingLeft = "80px";
} 

}

function clear() {
document.getElementById("date").innerHTML = "";
document.getElementById("orgadd").innerHTML = "";
document.getElementById("ref").innerHTML = "";
document.getElementById("letter").innerHTML = "";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "";
document.getElementById("director").innerHTML = "";
	}

// letters

// acceptance letter

function acceptance() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: ACCEPTANCE LETTER</u></b>";
document.getElementById("letter").innerHTML = "We would like to state that <b>" + coname + " </b>of <b>P.O. BOX " + coaddress + " - " + cocode + " " + cocounty + "</b> accepts the award of <b>" + ortno + " - " + ortname + " </b>for the sum of <b>Ksh " + amount + " (Kenya Shillings " + amountwords + " Only</b>).";
document.getElementById("extra1").innerHTML = "We look forward to working with you. ";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

// warranty 1 letter

function warranty1() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";

document.getElementById("ref").innerHTML = "<b><u>RE: WARRANTY DETAILS</u></b>";
document.getElementById("letter").innerHTML = "We would like to state  that we are committed to  providing warranty to the goods supplied in relation to  <b>" + ortno + " - " + ortname + ".";
document.getElementById("extra1").innerHTML = "The warranty will be one (1) year for all items. ";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

// compliance 1 letter

function compliance1() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";

document.getElementById("ref").innerHTML = "<b><u>RE: STATEMENT OF COMPLIANCE</u></b>";
document.getElementById("letter").innerHTML = "We would like to state that <b>" + coname + " </b> will comply to the conditions of " + orname + " as specified in  tender number " + ortno + " - " + ortname + ".";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

// eligible goods letter

function eligiblegoods() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";

document.getElementById("ref").innerHTML = "<b><u>RE: ELIGIBLE GOODS</u></b>";
document.getElementById("letter").innerHTML = "We would to state that our goods will conform to the set  technical specifications stated in tender for " + ortno + " - " + ortname + ".";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

// continuity statement

function cont1() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: COMPANY CONTINUITY STATEMENT</u></b>";
document.getElementById("letter").innerHTML = "We would like to state that <b>" + coname + " </b>of <b>P.O. BOX " + coaddress + " - " + cocode + " " + cocounty + "</b> NAIROBI is not subject to bankruptcy proceedings, in receivership, administrative receivership or any other form of liquidation as defined by the applicable law.";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

// continuity statement

function cont2() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: DECLARATION THAT THE TENDERER IS NOT INSOLVENT, IN RECEIVERSHIP, BANKRUPT OR IN THE PROCESS OF BEING WOUND UP PURSUANT TO SECTION 55 (1) (b) OF THE ACT. </u></b>";
document.getElementById("letter").innerHTML = "We hereby declare that " + coname + " is not insolvent,in receivership,bankrupt or in the the process of being wound up pursuant to Section 55 (1) (b) of the Act.";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

// avilability of employees

function emp1() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: AVAILABILITY OF EMPLOYEES</u></b>";
document.getElementById("letter").innerHTML = "We would like to state that our employees will be available to work on  Tender number <b>"  + ortno + " - " + ortname + ".";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

// insurance commitment

function insure() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: INSURANCE COMMITMENT</u></b>";
document.getElementById("letter").innerHTML = "We would like to state we will commit ourselves to furnish " + orname + " with the necessary insurance cover in relation to the tender number <b>"  + ortno + " - " + ortname + "</b>.";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

// local use of resources

function local1() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: LOCAL USE OF RESOURCES STATEMENT </u></b>";
document.getElementById("letter").innerHTML = "We would like to state that we will use local resources in relation to Tender number <b>"  + ortno + " - " + ortname + "</b>.";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

// non performance letter

function perform() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: HISTORY OF NON-PERFORMING CONTRACTS, INCOMPLETE  AND ONGOING PROJECTS </u></b>";
document.getElementById("letter").innerHTML = "We " + coname + " </b>of <b>P.O. BOX " + coaddress + " - " + cocode + " " + cocounty + " </b> would like to state that we have no history of Non- Performing Contracts, terminated contracts, incomplete, on-going contracts or delayed contracts beyond scheduled completion  with " + orname;
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

// no deviation statement

function nodev() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: STATEMENT ON DEVIATIONS </u></b>";
document.getElementById("letter").innerHTML = "We would like to state that there are no deviations concerning  Tender no: <b>"  + ortno + " - " + ortname + "</b>.";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

// debarment statement 1

function debarr1() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: DECLARATIONTHAT THE PERSON/TENDERER IS NOT PRECLUDED FROM ENTERING INTO A CONTRACT WITH THE PROCURING ENTITY PURSUANT TO SECTION 55 (1) (d) OF THE ACT </u></b>";
document.getElementById("letter").innerHTML = "We hereby declare that " + coname + " is not precluded from entering into a contract with the procuring entity pursuant to Section 55 (1) (d) OF THE ACT.";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

// debarment statement 2

function debarr2() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: DECLARATION THAT THE TENDERER OR ASSOCIATE TENDERER OR SUB-CONTRACTOR (IF ANY) IS NOT DEBARRED FROM PARTICIPATING IN PROCUREMENT PROCEEDINGS UNDER PART XI OF THE ACT PURSUANT TO SECTION 55(1) (e) OF THE ACT. </u></b>";
document.getElementById("letter").innerHTML = "We hereby declare that " + coname + " is not debarred from participating in the procurement proceedings under PART X1 of the Act Pursuant to Section 55(1)(e) of the Act.";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}


// anti - corruption statement 1

function anti1() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: DECLARATION THAT THE PERSON/TENDERER HAS NOT BEEN CONVICTED OF CORRUPT OR FRAUDULENT PRACTICES PURSUANT TO SECTION 55 (1) (g) OF THE ACT. </u></b>";
document.getElementById("letter").innerHTML = "We hereby declare that " + coname + " and its directors has not been convicted of corrupt or fraudulent practices pursuant to Section 55(1) (g) OF THE ACT.";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

// fair employment statement 1

function employ1() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: DECLARATION (BEFORE A COMMISSIONER OF OATHS) THAT THE PERSON/TENDERER IS NOT GUILTY OF ANY SERIOUS VIOLATION OF FAIR EMPLOYMENT LAWS AND PRACTICES PURSUANT TO SECTION 55 (1) (h) OF THE ACT </u></b>";
document.getElementById("letter").innerHTML = "We hereby declare that " + coname + " and its director are not guilty of any serious violation of fair employment laws and practices pursuant to Section 55 (1) (h) of the Act.";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

// conflict of intrest

function conflict1() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: CONFLICT OF INTEREST </u></b>";
document.getElementById("letter").innerHTML = "We hereby declare that " + coname + " does not have a conflict of interest. <br /><br /><br /> " + coname + " has not participated as a consultant in the preparation of the design, documentation or technical specifications of the works that are the subject of this bidding other than as far as required by the Employer.";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}


// power of attorney 1

function poa1() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: POWER OF ATTORNEY </u></b>";
document.getElementById("letter").innerHTML = "We hereby Appoint " + codirector +  " to serve as power of attorney for the company " + coname + "  in relation to tender " + ortno + " - " + ortname;
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}


// litigation history 1

function lh1() {
clear();
document.getElementById("showletter").style.display = "block";

document.getElementById("date").innerHTML = idate.slice(8, 10) + "/" + idate.slice(5, 7) + "/" + idate.slice(0, 4);
document.getElementById("orgadd").innerHTML = "<b>TO: " + orperson + "<br>" + orname  + "<br>" + oraddress + "</b><br><br><br><br>Dear Sir/Madam,";
document.getElementById("ref").innerHTML = "<b><u>RE: LITIGATION HISTORY </u></b>";
document.getElementById("letter").innerHTML = "We would like to state that " + coname +  " has no litigation history.";
document.getElementById("extra1").innerHTML = "";
document.getElementById("extra2").innerHTML = "Thank You.<br /><br /><br /> Yours Faithfully,<br />";
document.getElementById("director").innerHTML = "<b>" +codirector + "<br> DIRECTOR</b>";
}

function envelope() {
clear();	
	}


	





