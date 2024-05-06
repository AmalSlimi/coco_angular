package tn.esprit.amal.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.amal.Enteties.Chambre;
import org.springframework.stereotype.Repository;
import tn.esprit.amal.Enteties.Foyer;

@Repository

public interface RepositoryChambre extends JpaRepository<Chambre, Long> {
    public Foyer getFoyerByChambreId(long chambreId);

}
