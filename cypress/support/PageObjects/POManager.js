import { HomePage } from "./HomePage";
import { BookingPage } from "./BookingPage";

class POManager {
    constructor(){
        this.homePage = new HomePage();
        this.bookingPage = new BookingPage();
    }

    goToHomePage(){
        return this.homePage;
    }

    goToBookingPage(){
        return this.bookingPage;
    }
    
}

module.exports = {POManager}