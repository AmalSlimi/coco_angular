package tn.esprit.amal.ServicesImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.amal.Enteties.Etudiant;
import tn.esprit.amal.Enteties.Foyer;
import tn.esprit.amal.Repositories.RepositoryFoyer;
import tn.esprit.amal.Services.ServiceFoyer;

import java.util.Optional;
import java.util.Set;
@Service
public class ServiceImpFoyer implements ServiceFoyer {
    @Autowired
    private RepositoryFoyer repositoryFoyer;
    @Override
    public Foyer addOrUpdateFoyer(Foyer foyer) {
        return repositoryFoyer.save(foyer);
    }

    @Override
    public void deleteFoyer(long id) {
        repositoryFoyer.deleteById(id);
    }

    @Override
    public Optional<Foyer> getFoyerById(long id) {
        Optional<Foyer> foyer = repositoryFoyer.findById(id);
        if(foyer.isPresent())
            return foyer;
        else
            return Optional.of(new Foyer());
    }

    @Override
    public Set<Foyer> getAllFoyers() {
        return (Set<Foyer>)repositoryFoyer.findAll();
    }

    @Override
    public Set<Etudiant> gettAllEtudiantByFoyerId(long foyerId) {
        return repositoryFoyer.getAllEtudiantByFoyerId(foyerId);
    }
}
