package tn.esprit.amal.ServicesImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.amal.Enteties.Etudiant;
import tn.esprit.amal.Enteties.Reservation;
import tn.esprit.amal.Repositories.RepositoryEtudiant;
import tn.esprit.amal.Services.ServiceEtudiant;

import java.util.Optional;
import java.util.Set;
@Service
public class ServiceImpEtudiant implements ServiceEtudiant {
    @Autowired
    private RepositoryEtudiant repositoryEtudiant;
    @Override
    public Etudiant addOrUpdateEtudiant(Etudiant etudiant) {
        return repositoryEtudiant.save(etudiant);
    }

    @Override
    public void deleteEtudiant(long id) {
        repositoryEtudiant.deleteById(id);
    }

    @Override
    public Optional<Etudiant> getEtudiantById(long id) {
        Optional<Etudiant> etudiant = repositoryEtudiant.findById(id);
        if(etudiant.isPresent())
            return etudiant;
        else
            return Optional.of(new Etudiant());
    }

    @Override
    public Set<Etudiant> getAllEtudiants() {
        return (Set<Etudiant>)repositoryEtudiant.findAll();
    }

    @Override
    public Set<Reservation> getAllReservationByEtudiantId(int idEtudiant) {
        return repositoryEtudiant.getAllReservationByEtudiantId(idEtudiant);
    }
}
