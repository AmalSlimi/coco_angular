package tn.esprit.amal.Controllers;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.amal.Enteties.Foyer;
import tn.esprit.amal.ServicesImp.ServiceImpFoyer;


import java.util.Optional;
import java.util.Set;

@RestController
@FieldDefaults(level = AccessLevel.PRIVATE)
@RequestMapping("/ControllerFoyer")
public class ControllerFoyer {
    @Autowired
    ServiceImpFoyer serviceImpFoyer;

    @PostMapping("/addOrUpdateFoyer")
    Foyer addingOrUpdatingFoyer (Foyer foyer){
        return serviceImpFoyer.addOrUpdateFoyer(foyer);
    }
    @DeleteMapping("/deleteFoyer")
    void deletingFoyer(long id){
        serviceImpFoyer.deleteFoyer(id);
    }
    @GetMapping("/getFoyerById")
    Optional<Foyer> gettingFoyerById(long id){
        return serviceImpFoyer.getFoyerById(id);
    }
    @GetMapping("/getAllFoyer")
    Set<Foyer> gettingAllFoyer(){
        return serviceImpFoyer.getAllFoyers();
    }

}
