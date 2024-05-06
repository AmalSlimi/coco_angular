package tn.esprit.amal.Services;

import tn.esprit.amal.Enteties.Etudiant;
import tn.esprit.amal.Enteties.Universite;

import java.util.Optional;
import java.util.Set;

public interface ServiceUniversite {
    Universite addOrUpdateUniversite (Universite universite);
    void deleteUniversite (long id);
    Optional<Universite> getUniversiteById (long id);
    Set<Universite> getAllUniversite ();
    Set<Etudiant> getAllEtudiantByIdBloc(long universiteId);
  //  public Universite getUniversiteByIdBloc(int idBloc);
}
