'use client';
import { Input } from '@/app/ui/components/ui/input';
import { Label } from '@/app/ui/components/ui/label';
import { uploadFile } from '../../lib/actions/upload';

export function InputFile() {
  function handleInput(event: React.FormEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      uploadFile(formData);
    }
  }

  return (
    <form className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="excel">Upload Excel</Label>
      <Input
        id="excel"
        type="file"
        accept=".xlsx, .xls, .csv"
        name="file"
        onInput={handleInput}
      />
    </form>
  );
}
