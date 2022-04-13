const {
    Console
} = require("console");
const fs = require("fs");

const myLogger = new Console({stdout: fs.createWriteStream("actions2.txt")});

class Appointment {

    constructor(doctor, patient, isScheduled) {
        if(new.target === Appointment) {
            throw new Error("Can't be instantiated");
        }

        this.doctor = doctor,
        this.patient = patient,
        this.isScheduled = isScheduled
    }

    
}

class BloodPressure extends Appointment {
    constructor(doctor, patient, isScheduled) {
        super(doctor, patient, isScheduled);
        
        
    }
    bloodPressureValues(upperValue, lowerValue, pulse, date ) {
        this.upperValue = upperValue,
        this.lowerValue = lowerValue,
        this.pulse = pulse,
        this.date = date
    }
    
}

class BloodSugar extends Appointment {
    constructor(doctor, patient, isScheduled) {
        super(doctor, patient, isScheduled);
        this.value,
        this.lastMeal,
        this.date
    }

    bloodSugarValues(value, lastMeal, date ) {
        this.value = value,
        this.lastMeal = lastMeal,
        this.date = date
    }
}

class Cholesterol extends Appointment {
    constructor(doctor, patient, isScheduled) {
        super(doctor, patient, isScheduled);
        this.value,
        this.lastMeal,
        this.date
    }

    cholesterolValues(value, lastMeal, date) {
        this.value = value,
        this.lastMeal = lastMeal,
        this.date = date
    }
}

class Doctor {
    constructor(firstName, lastname, specialty) {
        this.firstName = firstName,
        this.lastname = lastname,
        this.specialty = specialty
    }


    makeAppointment(patient, type) {
        let appointment = {
            doctor: this,
            patient: patient,
            type: type
        }

        this.appointment = appointment;

        return this.appointment
    }
}

class Patient {
    constructor (name, lastname, id, healthCardNumber) {
        this.name = name,
        this.lastname = lastname,
        this.id = id,
        this.healthCardNumber = healthCardNumber
    }

    set doctor(doctor){
        this.chosenDoctor = doctor
    }

    get doctor() {
        return this.chosenDoctor;
    }
 
}

function log(message) {
    let currentDate = new Date();
    let log = `[${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}] ${message} ;`;
    myLogger.log(log);
}

const patient1 = new Patient("Dragan","Draganov","0605998347362","52");
log(`created patient "${patient1.name}"`);
const doctor1 = new Doctor("Milan","Milanov","Lekar opste prakse");
log(`created doctor "${doctor1.firstName}"`);

patient1.doctor = doctor1;

const date = `[${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}];`
doctor1.makeAppointment(patient1.name, "bloodSugar")

if(doctor1.appointment.type === "bloodSugar") {
    const bloodSugar = new BloodSugar(doctor1, patient1, true);
    let value = (Math.floor(Math.random() * 100));
    let lastMeal = "16:45";
    let dateSchedule = date;
    bloodSugar.bloodSugarValues(value, lastMeal, dateSchedule);

    log(`results for blood sugar appointment: patient "${patient1.name}" - Value: ${bloodSugar.value}, last meal: ${bloodSugar.lastMeal};`)
    
}
doctor1.makeAppointment(patient1.name, "bloodPressure")

if (doctor1.appointment.type === "bloodPressure") {
    const bloodPressure = new BloodPressure(doctor1, patient1, true);
    let lowerValue = (Math.floor(Math.random() * 100));
    let upperValue = (Math.floor(Math.random() * 200));
    let pulse = 60;
    let dateSchedule = date;
    bloodPressure.bloodPressureValues(lowerValue, upperValue, pulse, dateSchedule)

    log(`results for blood pressure appointment: patient "${patient1.name}" - upper Value: ${bloodPressure.upperValue}, lower Value: ${bloodPressure.lowerValue}, pulse: ${bloodPressure.pulse};`)
}
if (doctor1.appointment.type === "cholesterol") {
    const cholesterol = new Cholesterol(doctor1, patient1, true);
    let value = (Math.floor(Math.random() * 10));
    let lastMeal = "10:20";
    let dateSchedule = date;
    cholesterol.cholesterolValues(value, lastMeal, dateSchedule)

    log(`results for cholesterol appointment: patient "${patient1.name}" - Value: ${cholesterol.value}, last meal: ${cholesterol.lastMeal};`)
}