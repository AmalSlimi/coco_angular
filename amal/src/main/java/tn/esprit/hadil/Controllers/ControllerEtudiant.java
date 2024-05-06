package tn.esprit.amal.Controllers;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.amal.Enteties.Etudiant;
import tn.esprit.amal.ServicesImp.ServiceImpEtudiant;

import java.util.Optional;
import java.util.Set;

@RestController
@FieldDefaults(level = AccessLevel.PRIVATE)
@RequestMapping("/ControllerChambre")
public class ControllerEtudiant {
    @Autowired
    ServiceImpEtudiant serviceImpEtudiant;

    @PostMapping("/addOrUpdateEtudiant")
    Etudiant addingOrUpdatingEtudiant (Etudiant etudiant){
        return serviceImpEtudiant.addOrUpdateEtudiant(etudiant);
    }
    @DeleteMapping("/deleteEtudiant")
    void deletingEtudiant(long id){
        serviceImpEtudiant.deleteEtudiant(id);
    }
    @GetMapping("/getEtudiantById")
    Optional<Etudiant> gettingEtudiantById(long id){
        return serviceImpEtudiant.getEtudiantById(id);
    }
    @GetMapping("/getAllEtudiant")
    Set<Etudiant> gettingAllEtudiant(){
        return serviceImpEtudiant.getAllEtudiants();
    }

    }

