package tn.esprit.amal.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.amal.Enteties.Etudiant;
import org.springframework.stereotype.Repository;
import tn.esprit.amal.Enteties.Reservation;

import java.util.Set;

@Repository
public interface RepositoryEtudiant extends JpaRepository<Etudiant, Long> {
    public Set<Reservation> getAllReservationByEtudiantId(int idEtudiant);
}
