package it.akademija.spring.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import it.akademija.spring.dto.FestivalDTO;
import it.akademija.spring.services.FestivalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Api(value = "Festival controller")
@RequestMapping(value = "/festivals")
public class FestivalController {

    @Autowired
    private FestivalService festivalService;

//konstruktorius
    public FestivalController() {
    }
//kitas konstruktorius
    public FestivalController(FestivalService festivalService) {
        this.festivalService = festivalService;
    }
//Visos sventes: pirmas puslapis???
    @GetMapping
    @ApiOperation(value = "Get all festivals", notes = "Returns list of Festivals")
        public List<FestivalDTO> getAllFestivals(){
        return festivalService.getAllFestivals();
    }
//Viena svente
    @GetMapping(path = "/{title}")
    @ApiOperation(value = "Get one festival", notes="Returns desired festival")
        public FestivalDTO getFestivalByTitle(
                @ApiParam(value = "Festival title", required = true)
                @Valid
                @PathVariable final String title){
        return festivalService.findFestivalByTitle(title);
    }


    @PostMapping
    @ApiOperation(value = "Create and add new festival",
            notes = "Creates new Festival")
        public void createFestival(
                @ApiParam(value = "Festival data", required = true)
                @RequestBody final CreatingFestival creatingFestival) {
        festivalService.createFestival(
                creatingFestival.getTitle(),
                creatingFestival.getImage(),
                creatingFestival.getDescription(),
                creatingFestival.getType(),
                creatingFestival.isFlag());
    }

     @PutMapping(path = "/{oldTitle}")
     //@ResponseStatus(HttpStatus.OK)
     @ApiOperation(value = "Update Festival", notes = "Edit selected Festival")
        public void updateFestival(
                @ApiParam(value = "Festival title",required = true)
                //@Valid
                @PathVariable final String oldTitle,
                @RequestBody final CreatingFestival creatingFestival){
        festivalService.updateFestival(
                oldTitle,
                creatingFestival.getTitle(),
                creatingFestival.getImage(),
                creatingFestival.getDescription(),
                creatingFestival.getType(),
                creatingFestival.isFlag());
        }

     @DeleteMapping(path = "/{title}")
     //@ResponseStatus(HttpStatus.NO_CONTENT)
     @ApiOperation(value = "Delete Festival", notes = "Deletes selected festival")
        public void deleteFestival(@PathVariable final String title){
        festivalService.deleteFestival(title);
     }

}
