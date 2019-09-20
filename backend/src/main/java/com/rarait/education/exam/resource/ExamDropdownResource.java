package com.rarait.education.exam.resource;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.io.Serializable;

/**
 * @author Prajin Maharjan
 * @since 1.0
 */
@Getter
@Builder
@ToString
public class ExamDropdownResource implements Serializable {

    private int id;
    private String name;
}
