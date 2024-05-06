package tn.esprit.amal.Services;

import tn.esprit.amal.Enteties.Chambre;
import tn.esprit.amal.Enteties.Foyer;

import java.util.Optional;
import java.util.Set;

public interface ServiceChambre {
    Chambre addOrUpdateChambre (Chambre chambre);
    void deleteChambre (long id);
    Optional<Chambre> getChambreById (long id);
    Set<Chambre> getAllChambres();
    Foyer getFoyerByChambreId(long chambreId);
}
