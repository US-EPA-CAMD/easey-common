import {ApiProperty} from "@nestjs/swagger";
import {Type} from "@nestjs/common";

export interface ArrayResponse<T> {
    items: T[];
}

/**
 * Creates a runtime DTO class compatible with Swagger documentation for endpoints
 * that return an array of items inside a standardized response wrapper (ArrayResponse).
 *
 * This is necessary because interfaces (such as ArrayResponse) are compile time artifacts
 * and Swagger requires a proper class as types for generating swagger doc. Instead of
 * creating possibly hundreds of DTO classes just for swagger, this method simplifies that
 * by creating a class dynamically.
 *
 * @param itemType - The DTO class type for items in the array
 * @returns A class with a single 'items' property decorated for Swagger
 *
 * Example:
 *   --creating the DTO class
 *      const ArrayResponseMonitorMethodDTO = createArrayResponseDto(MonitorMethodDTO);
 *   --use in Swagger doc
 *      @ApiOkResponse({ type: ArrayResponseMonitorMethodDTO })
 */

export function createArrayResponseDto<T>(itemType: Type<T>): Type<any> {
    class ArrayResponseDto {
        @ApiProperty({ type: [itemType] })
        items: T[];
    }

    return ArrayResponseDto;
}