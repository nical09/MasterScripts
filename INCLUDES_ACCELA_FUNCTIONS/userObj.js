/**
 * User Object
 * Constructor:
 * @param vUserId {string} User ID
 * @return {boolean}
 *
 * Methods:
 * getEmailTemplateParams
 * @param params {HashTable}
 * @param [userType] {string} Used to create email paramerters
 * @return params {HashTable}
 */
function userObj(vUserId){
	this.userID = null;
	this.userFirstName = null;
	this.userLastName =  null;
	this.userMiddleName = null;
	this.userInitial = null;
	this.userEmail = null;
	this.userTitle = null;
	this.phoneNumber = null;
	this.dailyInspUnits = null;
	this.isInspector = null;
	this.userStatus = null;
	this.billingRate = null;
	this.cashierID = null;
	this.userObject = null;
	this.userFullName = null;
	
	var iNameResult = null;
	
	if(vUserId)
		iNameResult = aa.person.getUser(vUserId.toUpperCase());

	if (iNameResult.getSuccess()){
		var iUserObj = null;
		iUserObj = iNameResult.getOutput();
		this.userObject = iUserObj;
		this.userID = iUserObj.getUserID();
		this.userFirstName = iUserObj.getFirstName();
		this.userLastName =  iUserObj.getLastName();
		this.userMiddleName = iUserObj.getMiddleName();
		this.userFullName = iUserObj.getFullName();
		this.userInitial = iUserObj.getInitial();
		this.userEmail = iUserObj.getEmail();
		this.userTitle = iUserObj.getTitle();
		this.phoneNumber = iUserObj.getPhoneNumber();
		this.dailyInspUnits = iUserObj.getDailyInspUnits();
		this.isInspector = iUserObj.getIsInspector();
		this.userStatus = iUserObj.getUserStatus();
		this.billingRate = iUserObj.getRate1();
		this.cashierID = iUserObj.getCashierID();
		return true;
	}
	else{ logDebug("**ERROR retrieving user model for" + vUserId + " : " + iNameResult.getErrorMessage()) ; return false ; }
	
 this.getEmailTemplateParams = function (params, userType) {
			if(matches(userType,null,undefined,"")) userType = "user";
			
            addParameter(params, "$$" + userType + "LastName$$", this.userLastName);
            addParameter(params, "$$" + userType + "FirstName$$", this.userFirstName);
            addParameter(params, "$$" + userType + "MiddleName$$", this.userMiddleName);
            addParameter(params, "$$" + userType + "Initials$$", this.userInitial);
            addParameter(params, "$$" + userType + "PhoneNumber$$", this.phoneNumber);
            addParameter(params, "$$" + userType + "Email$$", this.userEmail);
            addParameter(params, "$$" + userType + "Title$$", this.userTitle);
			addParameter(params, "$$" + userType + "DailyInspUnits$$", this.dailyInspUnits);
			addParameter(params, "$$" + userType + "BillingRate$$", this.billingRate);
			addParameter(params, "$$" + userType + "CashierID$$", this.cashierID);
            addParameter(params, "$$" + userType + "FullName$$", this.userFullName);
            return params;
            }

}