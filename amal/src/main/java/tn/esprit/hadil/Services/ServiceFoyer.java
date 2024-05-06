package tn.esprit.amal.Services;

import tn.esprit.amal.Enteties.Etudiant;
import tn.esprit.amal.Enteties.Foyer;

import java.util.Optional;
import java.util.Set;

public interface ServiceFoyer {
    Foyer addOrUpdateFoyer (Foyer foyer);
    void deleteFoyer (long id);
    Optional<Foyer> getFoyerById (long id);
    Set<Foyer> getAllFoyers ();
    Set<Etudiant> gettAllEtudiantByFoyerId(long foyerId);
}
