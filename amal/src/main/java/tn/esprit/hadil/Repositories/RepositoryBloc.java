package tn.esprit.amal.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.amal.Enteties.Bloc;
import tn.esprit.amal.Enteties.Chambre;

import java.util.Set;

public interface RepositoryBloc extends JpaRepository<Bloc, Long> {
    public Set<Chambre> getAllChambreByBlocId(long blocId);
}


