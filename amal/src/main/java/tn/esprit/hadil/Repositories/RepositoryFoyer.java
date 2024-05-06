package tn.esprit.amal.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.amal.Enteties.Etudiant;
import tn.esprit.amal.Enteties.Foyer;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface RepositoryFoyer extends JpaRepository<Foyer, Long> {
    public Set<Etudiant> getAllEtudiantByFoyerId(long foyerId);
}
