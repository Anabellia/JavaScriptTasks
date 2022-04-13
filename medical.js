const {
    Console
} = require("console");
const fs = require("fs");

const myLogger = new Console({stdout: fs.createWriteStream("actions2.txt")});

class Appointment {

    doc = new Doctor;

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
        this.upperValue,
        this.lowerValue,
        this.pulse,
        this.date
        
    }
}

class BloodSugar extends Appointment {
    constructor(doctor, patient, isScheduled) {
        super(doctor, patient, isScheduled);
        this.value,
        this.lastMeal,
        this.date
        
    }
}

class Cholesterol extends Appointment {
    constructor(doctor, patient, isScheduled) {
        super(doctor, patient, isScheduled);
        this.value,
        this.lastMeal,
        this.date
        
    }
}

class Doctor {
    constructor(firstName, lastname, specialty) {
        this.firstName = firstName,
        this.lastname = lastname,
        this.specialty = specialty,
        this.appointment
    }


    get scheduledAppointment() {
        return this.appointment;
    }

    set scheduledAppointment(appointment) {
        this.appointment = appointment;
    }

    makeAppointment(patient, type) {
        let appointment = {
            doctor: this,
            patient: patient,
            type: type
        }

        this.scheduledAppointment = appointment;
        return appointment
    }
}

class Patient {
    constructor (name, lastname, id, healthCardNumber) {
        this.name = name,
        this.lastname = lastname,
        this.id = id,
        this.healthCardNumber = healthCardNumber
    }

    set doctor(doc){
        this.doctorChosen = doc
    }

    get doctor() {
        return this.doctorChosen;
    }

    set appointmentTaken(date) {
        this.appointmentTakenDate = date;
    }

    get appointmentTaken() {
        return this.appointmentTakenDate;
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

if(doctor1.scheduledAppointment.type === "bloodSugar") {
    patient1.takeAppointment = date;
    const bloodSugar = new BloodSugar(doctor1, patient1, true);
    bloodSugar.value = (Math.floor(Math.random() * 100));
    bloodSugar.lastMeal = "16:45";
    bloodSugar.date = patient1.appointmentTaken;
    log(`results for blood sugar appointment: patient "${patient1.name}" - Value: ${bloodSugar.value}, last meal: ${bloodSugar.lastMeal};`)
    
}
doctor1.makeAppointment(patient1.name, "bloodPressure")

if (doctor1.scheduledAppointment.type === "bloodPressure") {
    patient1.takeAppointment = date;
    const bloodPressure = new BloodPressure(doctor1, patient1, true);
    bloodPressure.lowerValue = (Math.floor(Math.random() * 100));
    bloodPressure.upperValue = (Math.floor(Math.random() * 200));
    bloodPressure.pulse = 60;
    bloodPressure.date = patient1.appointmentTaken;
    log(`results for blood pressure appointment: patient "${patient1.name}" - upper Value: ${bloodPressure.upperValue}, lower Value: ${bloodPressure.lowerValue}, pulse: ${bloodPressure.pulse};`)
}
if (doctor1.scheduledAppointment.type === "cholesterol") {
    const cholesterol = new Cholesterol(doctor1, patient1, true);
    cholesterol.value = (Math.floor(Math.random() * 10));
    cholesterol.lastMeal = "10:20";
    cholesterol.date = patient1.appointmentTaken;
    log(`results for cholesterol appointment: patient "${patient1.name}" - Value: ${cholesterol.value}, last meal: ${cholesterol.lastMeal};`)
}