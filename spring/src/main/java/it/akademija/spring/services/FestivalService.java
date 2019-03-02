package it.akademija.spring.services;

import it.akademija.spring.dto.FestivalDTO;
import it.akademija.spring.entities.Festival;
import it.akademija.spring.repositories.FestivalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FestivalService {

    @Autowired
    private FestivalRepository festivalRepository;

    public FestivalService() {
    }

    public FestivalService(FestivalRepository festivalRepository) {
        this.festivalRepository = festivalRepository;
    }

    @Transactional(readOnly = true)
    public List<FestivalDTO> getAllFestivals() {
        return festivalRepository.findAll().stream().map(festival ->
                new FestivalDTO(
                        festival.getTitle(),
                        festival.getImage(),
                        festival.getDescription(),
                        festival.getType(),
                        festival.isFlag())).collect(Collectors.toList());
    }
//Viena svente
    @Transactional(readOnly = true)
    public FestivalDTO findFestivalByTitle(String title) {

        Festival currentFestival = festivalRepository.findFestivalByTitle(title);
        FestivalDTO festivalToController = new FestivalDTO(
                currentFestival.getTitle(),
                currentFestival.getImage(),
                currentFestival.getDescription(),
                currentFestival.getType(),
                currentFestival.isFlag());
        return festivalToController;
    }

    @Transactional
    public void createFestival(String title, String image,
                               String description, String type, boolean flag) {
        Festival newFestival = new Festival(title, image, description, type, flag);
        festivalRepository.save(newFestival);

    }

    @Transactional
    public void updateFestival(String currentTitle, String title,
                               String image, String description,
                               String type, boolean flag) {
        Festival festivalToUpdate =
                festivalRepository.findFestivalByTitle(currentTitle);
        festivalToUpdate.setTitle(title);
        festivalToUpdate.setImage(image);
        festivalToUpdate.setDescription(description);
        festivalToUpdate.setType(type);
        festivalToUpdate.setFlag(flag);
        festivalRepository.save(festivalToUpdate);
    }

    @Transactional
    public void deleteFestival(String title) {
        festivalRepository.deleteFestivalByTitle(title);
    }

}

