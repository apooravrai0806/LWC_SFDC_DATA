public with sharing class showError {
    

    @AuraEnabled(cacheable=true)
    public static List<Contact> getErrorss() {
        throw new AuraHandledException('Forced error');
    }
}
