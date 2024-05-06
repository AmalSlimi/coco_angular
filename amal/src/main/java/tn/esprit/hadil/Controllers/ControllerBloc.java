package tn.esprit.amal.Controllers;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.amal.Enteties.Bloc;
import tn.esprit.amal.Enteties.Chambre;
import tn.esprit.amal.ServicesImp.ServiceImpBloc;

import java.util.Optional;
import java.util.Set;

@RestController
@FieldDefaults(level = AccessLevel.PRIVATE)
@RequestMapping("/ControllerBloc")
public class ControllerBloc {
    @Autowired
    ServiceImpBloc serviceImpBloc;
    @PostMapping("/addOrUpdateBloc")
    Bloc addingOrUpdatingBloc (Bloc bloc){
        return serviceImpBloc.addOrUpdateBloc(bloc);
    }
    @DeleteMapping("/deleteBloc")
    void deletingBloc(long id){
        serviceImpBloc.deleteBloc(id);
    }
    @GetMapping("/getBlocById")
    Optional<Bloc> gettingBlocById(long id){
        return serviceImpBloc.getBlocById(id);
    }
    @GetMapping("/getAllBloc")
    Set<Bloc> gettingAllBloc(){
        return serviceImpBloc.getAllBlocs();
    }
    @GetMapping("/getAllChambreByFoyerId")
    Set<Chambre> gettingAllChambreByFoyerId(long id){
        return serviceImpBloc.getAllChambreByFoyerId(id);
    }


    @Scheduled(fixedDelay = 30000)
    public void ListBlocks() {
        Set<Bloc> blocks = serviceImpBloc.getAllBlocs();

        System.out.println("Liste des blocs :");
        for (Bloc bloc : blocks) {
            System.out.println(bloc);
        }}
}
