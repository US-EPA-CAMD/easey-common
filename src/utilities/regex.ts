export class Regex {
 /**
   * Returns a regex pattern that searches for a specific string in a comma delimited list
   */
  public static escape(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * Returns a regex pattern that searches for a specific string in a comma delimited list
   */
  public static commaDelimited(str: string): string {
    const s = Regex.escape(str);
    return `((^${s}$)|([,][ ]*${s}$)|([,][ ]*${s}[,])|(^${s}[,])|(^${s} [(])|([,][ ]*${s} [(]))`;
  }

  /**
   * Returns a regex pattern that searches for a specific string in a pipe-delimited list
   */
  public static pipeDelimited(str: string): string {
    const s = Regex.escape(str);
    return `((^${s}$)|([|][ ]*${s}$)|([|][ ]*${s}[|])|(^${s}[|])|(^${s} [(])|([|][ ]*${s} [(]))`;
  }

}
