export class Regex {
  /**
   * Returns a regex pattern that searches for a specific string in a comma delimited list
   */
  public static commaDelimited(str: string): string {
    return `'((^${str}$)|([,][ ]*${str}$)|([,][ ]*${str}[,])|(^${str}[,])|(^${str} [(])|([,][ ]*${str} [(]))'`;
  }

  /**
   * Returns a regex pattern that searches for a specific string in a pipe-delimited list
   */
  public static pipeDelimited(str: string): string {
    return `'((^${str}$)|([|][ ]*${str}$)|([|][ ]*${str}[|])|(^${str}[|])|(^${str} [(])|([|][ ]*${str} [(]))'`;
  }
}
