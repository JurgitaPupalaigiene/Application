package it.akademija.spring.entities;

import javax.persistence.*;

@Entity
public class Festival {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name="title", unique = true)
    private String title;

    @Column
    private String image;

    @Column
    private String description;

    @Column
    private String type;

    @Column
    boolean flag;

    public Festival() {
    }

    public Festival(String title, String image, String description, String type, boolean flag) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.type = type;
        this.flag = flag;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }
}
