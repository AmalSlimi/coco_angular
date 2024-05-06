package tn.esprit.amal.ServicesImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.amal.Enteties.Bloc;
import tn.esprit.amal.Enteties.Chambre;
import tn.esprit.amal.Repositories.RepositoryBloc;
import tn.esprit.amal.Services.ServiceBloc;

import java.util.Optional;
import java.util.Set;

@Service
public class ServiceImpBloc implements ServiceBloc {
    @Autowired
    private RepositoryBloc repositoryBloc;

    @Override
    public Bloc addOrUpdateBloc(Bloc bloc) {
        return repositoryBloc.save(bloc);
    }

    @Override
    public void deleteBloc(long id) {
        repositoryBloc.deleteById(id);
    }

    @Override
    public Optional<Bloc> getBlocById(long id) {
        Optional<Bloc> bloc = repositoryBloc.findById(id);
        if(bloc.isPresent())
            return bloc;
        else
            return Optional.of(new Bloc());

    }

    @Override
    public Set<Bloc> getAllBlocs() {
        return (Set<Bloc>) repositoryBloc.findAll();
    }

    @Override
    public Set<Chambre> getAllChambreByFoyerId(long blocId) {
        return null;
    }


}
