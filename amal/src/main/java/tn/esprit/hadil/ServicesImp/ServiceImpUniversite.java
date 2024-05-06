package tn.esprit.amal.ServicesImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.amal.Enteties.Etudiant;
import tn.esprit.amal.Enteties.Universite;
import tn.esprit.amal.Repositories.RepositoryUniversite;
import tn.esprit.amal.Services.ServiceUniversite;

import java.util.Optional;
import java.util.Set;
@Service
public class ServiceImpUniversite implements ServiceUniversite {
    @Autowired
    private RepositoryUniversite repositoryUniversite;
    @Override
    public Universite addOrUpdateUniversite(Universite universite) {
        return repositoryUniversite.save(universite);
    }

    @Override
    public void deleteUniversite(long id) {
        repositoryUniversite.deleteById(id);
    }

    @Override
    public Optional<Universite> getUniversiteById(long id) {
        Optional<Universite> universite = repositoryUniversite.findById(id);
        if(universite.isPresent())
            return  universite;
        else
            return Optional.of(new Universite());
    }

    @Override
    public Set<Universite> getAllUniversite() {
        return (Set<Universite>)repositoryUniversite.findAll();
    }

    @Override
    public Set<Etudiant> getAllEtudiantByIdBloc(long universiteId) {
        return null;
    }
   /* @Override
    public Universite getUniversiteByIdBloc(int idBloc) {
        return repositoryUniversite.findUniversiteByBlocsId(idBloc);
    }
*/

}
