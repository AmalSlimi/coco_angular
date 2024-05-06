package tn.esprit.amal.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.amal.Enteties.Etudiant;
import tn.esprit.amal.Enteties.Universite;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface RepositoryUniversite extends JpaRepository<Universite, Long> {
    public Set<Etudiant> getAllEtudiantByIdUniversite(long universiteId);

 //   Universite findUniversiteByBlocsId(int idBloc);
}
