package tn.esprit.amal.Controllers;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.amal.Enteties.Chambre;
import tn.esprit.amal.ServicesImp.ServiceImpChambre;
import java.util.Optional;
import java.util.Set;

@RestController
@FieldDefaults(level = AccessLevel.PRIVATE)
@RequestMapping("/ControllerChambre")
public class ControllerChambre {
    @Autowired
    ServiceImpChambre serviceImpChambre;

    @PostMapping("/addOrUpdateChambre")
    Chambre addingOrUpdatingChambre(Chambre chambre) {
        return serviceImpChambre.addOrUpdateChambre(chambre);
    }

    @DeleteMapping("/deleteChambre")
    void deletingChambre(long id) {
        serviceImpChambre.deleteChambre(id);
    }

    @GetMapping("/getChambreById")
    Optional<Chambre> gettingChambreById(long id) {
        return serviceImpChambre.getChambreById(id);
    }

    @GetMapping("/getAllChambre")
    Set<Chambre> gettingAllChambre() {
        return serviceImpChambre.getAllChambres();
    }
}
