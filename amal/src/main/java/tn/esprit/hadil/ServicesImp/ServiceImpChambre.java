package tn.esprit.amal.ServicesImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.amal.Enteties.Chambre;
import tn.esprit.amal.Enteties.Foyer;
import tn.esprit.amal.Repositories.RepositoryChambre;
import tn.esprit.amal.Services.ServiceChambre;

import java.util.Optional;
import java.util.Set;

@Service
public class ServiceImpChambre implements ServiceChambre {
    @Autowired
    private RepositoryChambre repositoryChambre;
    @Override
    public Chambre addOrUpdateChambre(Chambre chambre) {
        return repositoryChambre.save(chambre);
    }

    @Override
    public void deleteChambre(long id) {
        repositoryChambre.deleteById(id);
    }

    @Override
    public Optional<Chambre> getChambreById(long id) {
        Optional<Chambre> chambre = repositoryChambre.findById(id);
        if(chambre.isPresent())
            return chambre;
        else
            return Optional.of(new Chambre());
    }

    @Override
    public Set<Chambre> getAllChambres() {
        return (Set<Chambre>) repositoryChambre.findAll();
    }

    @Override
    public Foyer getFoyerByChambreId(long chambreId) {
        return repositoryChambre.getFoyerByChambreId(chambreId);
    }
}







