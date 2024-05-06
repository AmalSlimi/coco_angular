package tn.esprit.amal.Controllers;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.amal.Enteties.Etudiant;
import tn.esprit.amal.Enteties.Universite;
import tn.esprit.amal.ServicesImp.ServiceImpUniversite;
import java.util.Optional;
import java.util.Set;

@RestController
@FieldDefaults(level = AccessLevel.PRIVATE)
@RequestMapping("/ControllerUniversite")
public class ControllerUniversite {
    @Autowired
    ServiceImpUniversite serviceImpUniversite;

    @PostMapping("/addOrUpdateUniversite")
    Universite addingOrUpdatingUniversite (Universite universite){
        return serviceImpUniversite.addOrUpdateUniversite(universite);
    }
    @DeleteMapping("/deleteUniversite")
    void deletingUniversite(long id){
        serviceImpUniversite.deleteUniversite(id);
    }
    @GetMapping("/getUniversiteById")
    Optional<Universite> gettingUniversiteById(long id){
        return serviceImpUniversite.getUniversiteById(id);
    }
    @GetMapping("/getAllUniversite")
    Set<Universite> gettingAllUniversite(){
        return serviceImpUniversite.getAllUniversite();
    }
    @GetMapping("/getAllEtudiantByIdBloc")
    Set<Etudiant> gettingAllEtudiantsByBlocId(long id){
        return serviceImpUniversite.getAllEtudiantByIdBloc(id);
    }

}
