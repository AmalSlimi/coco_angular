package tn.esprit.amal.Services;

import tn.esprit.amal.Enteties.Etudiant;
import tn.esprit.amal.Enteties.Reservation;

import java.util.Optional;
import java.util.Set;

public interface ServiceEtudiant {
    Etudiant addOrUpdateEtudiant (Etudiant etudiant);
    void deleteEtudiant (long id);
    Optional<Etudiant> getEtudiantById (long id);
    Set<Etudiant> getAllEtudiants ();
    Set<Reservation> getAllReservationByEtudiantId(int idEtudiant);
}
