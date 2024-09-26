export function formatDateToBR(dateString) {
    if (!dateString) return '-'
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

export function calculateAge(birthDate) {
    const birth = new Date(birthDate);
    const today = new Date();
    
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  }