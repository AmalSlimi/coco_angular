package tn.esprit.amal.Controllers;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.amal.Enteties.Reservation;
import tn.esprit.amal.ServicesImp.ServiceImpReservation;

import java.util.Optional;
import java.util.Set;

@RestController
@FieldDefaults(level = AccessLevel.PRIVATE)
@RequestMapping("/ControllerUniversite")
public class ControllerReservation {
    @Autowired
    ServiceImpReservation serviceImpReservation;

    @PostMapping("/addOrUpdateReservation")
    Reservation addingOrUpdatingReservation(Reservation universite) {
        return serviceImpReservation.addOrUpdateReservation(universite);
    }

    @DeleteMapping("/deleteReservation")
    void deletingReservation(String id) {
        serviceImpReservation.deleteReservation(id);
    }

    @GetMapping("/getReservationById")
    Optional<Reservation> gettingReservationById(String id) {
        return serviceImpReservation.getReservationById(id);
    }

    @GetMapping("/getAllReservation")
    Set<Reservation> gettingAllReservation() {
        return serviceImpReservation.getAllReservations();
    }
}
