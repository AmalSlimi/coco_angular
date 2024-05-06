package com.esprit.examenrevision.service;

import com.esprit.examenrevision.entity.*;
import com.esprit.examenrevision.repository.CliniqueRepository;
import com.esprit.examenrevision.repository.MedecinRepository;
import com.esprit.examenrevision.repository.PatientRepository;
import com.esprit.examenrevision.repository.RendezVousRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServiceImp implements ServiceExamen {
    @Autowired
    private CliniqueRepository cliniqueRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private MedecinRepository medecinRepository;

    @Autowired
    private RendezVousRepository rendezVousRepository;

    @Override
    public Clinique addClinique(Clinique clinique) {
        return cliniqueRepository.save(clinique);
    }

    @Override
    public Medecin addMedecinAndAssignToClinique(Medecin medecin, Long cliniqueId) {
        Clinique c = cliniqueRepository.findById(cliniqueId).orElse(null);
        List<Medecin> list = new ArrayList<>();
        list.add(medecin);
        if (c.getMedecins() == null) {
            c.setMedecins(list);
        } else {
            c.getMedecins().add(medecin);
        }
        return medecinRepository.save(medecin);
    }

    @Override
    public Patient addPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public RendezVous addRDVAssignMedAndPatient(RendezVous rendezVous, Long idMedecin, Long idPatient) {
        Medecin m = medecinRepository.findById(idMedecin).orElse(null);
        Patient p = patientRepository.findById(idPatient).orElse(null);
        rendezVous.setPatient(p);
        rendezVous.setMedecin(m);
        return rendezVousRepository.save(rendezVous);
    }

    @Override
    public List<RendezVous> getRendezVousByCliniqueAndCliniqueAndSpecialite(Long idClinique, Specialite specialite) {
        Clinique c = cliniqueRepository.findById(idClinique).orElse(null);
        List<RendezVous> list = rendezVousRepository.findAll();

        List<RendezVous> resultat = new ArrayList<>();
        for (RendezVous r : list) {
            Medecin m = r.getMedecin();
            if (m.getCliniques() != null) {
                for (Clinique clinique : m.getCliniques()) {
                    if (c.equals(clinique) && m.getSpecialite().equals(specialite)) {
                        resultat.add(r);
                    }
                }
            }
        }
        return resultat;
    }


    @Override
    public int getNbrRendezVousMedecin(Long idMedecin) {
    int nb = 0;
    Medecin m = medecinRepository.findById(idMedecin).orElse(null);
    List<RendezVous> list = rendezVousRepository.findAll();
    for(rendezVous r:list) {
        if (r.getMedecin().equals(m)){
            nb++;
        }
    }
    return nb;
    //return countByMedecin_IdMedecin(idMedecin); //keywords
        //return countIdMedecin(idMedecin);//JPQL

        public void retrieveRendezVous(){
            List<RendezVous> list=rendezVousRepository.findAll();
            for (RendezVous r:list){
                if (r.getDateRDV().after(new Date())){
                    log.info("la liste des rendezVous: +r.getDateRDV()+" : Medecin :"+r.getMedecin().getNomMedecin()")
                }
            }
        }
}



}
