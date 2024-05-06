package tn.esprit.amal.Services;

import tn.esprit.amal.Enteties.Bloc;
import tn.esprit.amal.Enteties.Chambre;

import java.util.Optional;
import java.util.Set;

public interface ServiceBloc {
    Bloc addOrUpdateBloc (Bloc bloc);
    void deleteBloc (long id);
    Optional<Bloc> getBlocById (long id);
    Set<Bloc> getAllBlocs();
    Set<Chambre> getAllChambreByFoyerId (long blocId);
}
