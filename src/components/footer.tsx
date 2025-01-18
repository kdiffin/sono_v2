function Footer() {
  return (
    <div className="border-border border-t  p-4 flex items-center justify-center ">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-primary font-semibold">SONO</span>. All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
