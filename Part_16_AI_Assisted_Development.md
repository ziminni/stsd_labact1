# Part 16 – AI-Assisted Development

## AI Tool

**ChatGPT**

## Prompt Used

> Suggest a TypeScript implementation for converting a student's active/inactive status into a readable label. Explain the implementation and include possible edge cases. Do not use the `any` type.

## AI Recommendation

A suitable TypeScript implementation is to use a union type for the valid student statuses and a function that converts each status into a readable label.

```typescript
type StudentStatus = "active" | "inactive";

function getStudentStatusLabel(status: StudentStatus): string {
    if (status === "active") {
        return "Active Student";
    }

    return "Inactive Student";
}

// Example usage
const studentStatus: StudentStatus = "active";

console.log(getStudentStatusLabel(studentStatus));
// Output: Active Student
```

## Explanation

The `StudentStatus` type restricts the possible values to `"active"` or `"inactive"`. This provides type safety because TypeScript will report an error if another value, such as `"graduated"`, is used where a `StudentStatus` is expected.

The `getStudentStatusLabel()` function accepts a `StudentStatus` value and returns a readable string. When the status is `"active"`, it returns `"Active Student"`. Otherwise, it returns `"Inactive Student"`.

The implementation does not use the `any` type.

## Possible Edge Cases

1. **Invalid status**  
   A value such as `"graduated"` should not be accepted as a `StudentStatus`. TypeScript can detect this during development.

2. **Unexpected external data**  
   If the status comes from an API or another external source, TypeScript's type system alone cannot guarantee that the runtime value is valid. The external data should be validated before being passed to the function.

3. **Missing status**  
   If a student has no status, the application should validate the data instead of automatically assuming that the student is inactive.

4. **Future statuses**  
   If the system later introduces statuses such as `"suspended"`, the `StudentStatus` type and the function should be updated to handle the new status.

## AI Usage Note

The AI-generated recommendation was reviewed rather than immediately copied and committed. The implementation should be evaluated against the laboratory requirements before being used in the project.

## Laboratory Requirement

Part 16 requires the student to ask an instructor-approved AI coding assistant for a TypeScript implementation, explain the implementation and possible edge cases, avoid the `any` type, save the AI response in the laboratory documentation, and not immediately copy and commit the recommendation.
